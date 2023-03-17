import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import Contacts from 'components/contacts/Contacts';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#d11fb6',
    color: 'white',
  },
  section: {
    margin: 1,
    padding: 1,
  },
  viewer: {
    width: window.innerWidth / 3, // the pdf viewer will take up all of the width and height
    height: window.innerHeight / 2,
  },
  image: {
    width: 500,
    height: 500,
  },
});

// Create Document Component
function BasicDocument(): JSX.Element {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document */}
      <Document>
        {/* render a single page */}
        <Page size="A6" style={styles.page}>
          <View style={styles.section}>
            <Text>Hello</Text>
          </View>
          <View>
            <Contacts />
          </View>
          <Image
            style={styles.image}
            src="https://image.shutterstock.com/image-photo/tiny-floating-house-on-lake-600w-1980476267.jpg"

          />
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
