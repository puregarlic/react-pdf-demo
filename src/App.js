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
      <Page wrap style={style.page} size="A4" wrap>
        <View>
          <View style={style.tr}>
              <Text style={style.tdl}>Stuff and things</Text>
              <Text style={style.tdr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta neque suscipit lorem aliquam, et ultricies eros tincidunt. Maecenas turpis ipsum, dignissim at facilisis id, lobortis eu enim. Nulla id risus dictum, pulvinar lorem quis, posuere nisi. Nulla sit amet cursus est. Sed vel tristique justo, a lobortis massa. Donec ut suscipit sem. Proin dolor sapien, eleifend sed massa ac, venenatis lacinia purus. Curabitur nec lorem accumsan, tristique risus non, consequat dolor. Vivamus ultrices tempor nunc. Aliquam bibendum, felis suscipit placerat porta, erat dolor aliquam lectus, aliquam accumsan diam mauris sed lorem. Fusce vestibulum arcu eu mi consectetur luctus. Aliquam erat volutpat.

Mauris at neque ac leo aliquet viverra vitae id mi. Nam lobortis mauris vitae eros efficitur suscipit sit amet eget enim. Nulla quis augue eget massa varius ultrices ut id risus. Mauris scelerisque nulla sed justo gravida tempor. Sed sit amet gravida urna. Quisque id ligula metus. Aliquam ut consequat augue. Nulla feugiat ipsum non massa dignissim, at posuere turpis pharetra. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dolor odio, pretium sed mollis at, commodo ut orci. Phasellus eget efficitur mi, sit amet hendrerit diam. Pellentesque sodales lorem ac posuere egestas. Praesent semper ornare lectus.</Text>
            </View>

            <View style={style.tr}>
              <Text style={style.tdl}>Stuff and things</Text>
              <Text style={style.tdr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta neque suscipit lorem aliquam, et ultricies eros tincidunt. Maecenas turpis ipsum, dignissim at facilisis id, lobortis eu enim. Nulla id risus dictum, pulvinar lorem quis, posuere nisi. Nulla sit amet cursus est. Sed vel tristique justo, a lobortis massa. Donec ut suscipit sem. Proin dolor sapien, eleifend sed massa ac, venenatis lacinia purus. Curabitur nec lorem accumsan, tristique risus non, consequat dolor. Vivamus ultrices tempor nunc. Aliquam bibendum, felis suscipit placerat porta, erat dolor aliquam lectus, aliquam accumsan diam mauris sed lorem. Fusce vestibulum arcu eu mi consectetur luctus. Aliquam erat volutpat.

Mauris at neque ac leo aliquet viverra vitae id mi. Nam lobortis mauris vitae eros efficitur suscipit sit amet eget enim. Nulla quis augue eget massa varius ultrices ut id risus. Mauris scelerisque nulla sed justo gravida tempor. Sed sit amet gravida urna. Quisque id ligula metus. Aliquam ut consequat augue. Nulla feugiat ipsum non massa dignissim, at posuere turpis pharetra. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dolor odio, pretium sed mollis at, commodo ut orci. Phasellus eget efficitur mi, sit amet hendrerit diam. Pellentesque sodales lorem ac posuere egestas. Praesent semper ornare lectus.</Text>
            </View>
        </View>
      </Page>
    </Document>
  </div>
);

export default App;
