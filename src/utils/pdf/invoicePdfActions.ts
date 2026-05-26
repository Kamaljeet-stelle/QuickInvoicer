import { Platform } from 'react-native';
import { generatePDF } from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import Share from 'react-native-share';
import {
  buildInvoiceHtml,
  invoicePdfFileName,
  type InvoicePdfTranslate,
} from './buildInvoiceHtml';

function shareCancelled(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }
  const message = error.message.toLowerCase();
  return message.includes('cancel') || message.includes('did not share');
}

function toShareableFileUrl(filePath: string): string {
  if (filePath.startsWith('file://')) {
    return filePath;
  }
  return Platform.OS === 'android' ? `file://${filePath}` : filePath;
}

/** Generates a PDF and opens the system share sheet so the user can save or send it. */
export async function downloadInvoicePdf(t: InvoicePdfTranslate): Promise<void> {
  const html = buildInvoiceHtml(t);
  const fileName = invoicePdfFileName(t);

  const result = await generatePDF({
    html,
    fileName,
    directory: 'Documents',
  });

  if (!result?.filePath) {
    throw new Error('PDF file was not created');
  }

  try {
    await Share.open({
      url: toShareableFileUrl(result.filePath),
      type: 'application/pdf',
      title: fileName,
      failOnCancel: false,
    });
  } catch (error) {
    if (!shareCancelled(error)) {
      throw error;
    }
  }
}

/** Opens the native print dialog for the invoice HTML. */
export async function printInvoice(t: InvoicePdfTranslate): Promise<void> {
  const html = buildInvoiceHtml(t);
  await RNPrint.print({
    html,
    jobName: invoicePdfFileName(t),
  });
}
