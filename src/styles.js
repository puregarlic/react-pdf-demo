import { StyleSheet } from '@react-pdf/renderer';

// Define styles here to use on the PDF page.
// Documentation at https://react-pdf.org/styling

export default StyleSheet.create({
  page: {
    textAlign: 'center',
    padding: 30
  },
  column: {
    flexGrow: 1,
  },
  text: {
    padding: 15,
    margin: 10,
    fontSize: 10,
    color: 'black',
  },
  tr: {
    fontSize: 15,
    padding: 10
  },
  tdl: {
    textAlign: "left",
    width: 125,
    border: 1,
    borderColor: 'black',
  },

  tdr: {
    padding: 20,
    textAlign: 'right',
    width: 375,
    border: 1,
    borderColor: 'black'
  }

});
