import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';

// Modify this page to change the PDF structure.

// Available components:
//   https://react-pdf.org/components
//   https://github.com/lelandrichardson/react-primitives

import style from './styles';

const App = () => (
  <div className="app">
    <div className="header">
      <h2>React PDF DOM bindings</h2>
    </div>
    <Document title="Testing" author="CASS" subject="Rendering with react-pdf">
      <Page wrap style={style.page}>
        <View>
          <View>
            <Text style={style.text}>Hello, world</Text>
          </View>
        </View>
      </Page>
    </Document>
  </div>
);

export default App;
