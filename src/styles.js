import { StyleSheet } from '@react-pdf/renderer';

// Define styles here to use on the PDF page.
// Documentation at https://react-pdf.org/styling

export default StyleSheet.create({
  page: {
    textAlign: 'center',
  },
  column: {
    flexGrow: 1,
  },
  text: {
    margin: 10,
    fontSize: 10,
    color: 'black',
  },
});
