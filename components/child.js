import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Constants, Svg } from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.color = {
      tanOpen: this.props.tan,
      tanClose: "rgba(0,0,0,0.1)",
      hairOpen: this.props.hair,
      hairClose: "rgba(0,0,0,0.15)",
      eye: this.props.eye,
      mouth: "rgba(200,50,80,0.35)",
      arm: "rgba(0,0,0,0.15)",
      shirt: this.props.shirt
    }
  }

  render() {
    return(
      <View style={styles.child}>
        <Svg height={200} width={200} viewBox="0 0 465 465">
        	<Svg.Path fill={this.color.tanOpen} d="M388.628,437.023l-10.126-81.012c-1.529-12.228-9.943-22.492-21.633-26.389l-39.047-13.016
        		c-5.362-1.788-11.244-0.649-15.379,2.874l-11.502-3.834c-6.533-2.178-10.94-8.292-10.94-15.179v-25.802l34.461-14.359
        		C332.349,252.855,344,235.378,344,216v-8c13.255,0,24-10.745,24-24c0-5.979-2.191-11.443-5.808-15.645
        		C368.983,143.637,388.07,65.449,368,32l8-32c0,0-84,2-128,16l16-16c0,0-112.5,0-135.993,39.993L128,40c0,0-40-0.333-40,48
        		c0,17.69,9.867,61.862,14.103,80.015C98.31,172.259,96,177.859,96,184c0,13.255,10.745,24,24,24v8
        		c0,19.377,11.651,36.854,29.538,44.308L184,274.667v25.801c0,6.887-4.407,13.001-10.94,15.179l-11.502,3.834
        		c-4.135-3.523-10.017-4.662-15.379-2.874l-39.047,13.016c-11.691,3.897-20.105,14.161-21.633,26.389l-10.126,81.012
        		C73.582,451.348,84.751,464,99.187,464h0.225h265.176h0.225C379.249,464,390.419,451.348,388.628,437.023z"/>
      		<Svg.Path fill={this.color.tanClose} d="M280,274.667l-96,0.001v25.801c0,5.759-3.186,10.831-8.017,13.659
      			C243.077,325.871,280,274.667,280,274.667z"/>
      		<Svg.Path fill={this.color.hairOpen} d="M104,176c0,0-16-65.474-16-88c0-48.333,40-48,40-48l0.007-0.007C151.5,0,264,0,264,0l-16,16
      			C292,2,376,0,376,0l-8,32c24,40-8,144-8,144H104z"/>
      		<Svg.Path fill={this.color.hairClose} d="M264,0c0,0-112.5,0-135.993,39.993L128,40c0,0-40-0.333-40,48c0,22.526,16,88,16,88
      			S270.334,101.667,376,0c0,0-84,2-128,16L264,0z"/>
        	<Svg.Path fill={this.color.tanOpen} d="M344,160v-16c0-22.091-17.909-40-40-40H160c-22.091,0-40,17.909-40,40v16c-13.255,0-24,10.745-24,24
        		s10.745,24,24,24v8c0,19.377,11.651,36.854,29.538,44.308l51.691,21.538c9.75,4.063,20.208,6.154,30.77,6.154l0,0
        		c10.562,0,21.019-2.092,30.769-6.154l51.694-21.539C332.349,252.855,344,235.378,344,216v-8c13.255,0,24-10.745,24-24
        		S357.255,160,344,160z"/>
      		<Svg.Path fill={this.color.eye} d="M176,192L176,192c-4.4,0-8-3.6-8-8v-8c0-4.4,3.6-8,8-8l0,0c4.4,0,8,3.6,8,8v8
      			C184,188.4,180.4,192,176,192z"/>
      		<Svg.Path fill={this.color.eye} d="M288,192L288,192c-4.4,0-8-3.6-8-8v-8c0-4.4,3.6-8,8-8l0,0c4.4,0,8,3.6,8,8v8
      			C296,188.4,292.4,192,288,192z"/>
    			<Svg.Path fill={this.color.mouth} d="M232,248.219c-14.223,0-27.527-3.5-36.5-9.605c-3.652-2.484-4.602-7.461-2.113-11.113
    				c2.48-3.648,7.461-4.598,11.113-2.113c6.289,4.277,16.57,6.832,27.5,6.832s21.211-2.555,27.5-6.832
    				c3.66-2.492,8.629-1.539,11.113,2.113c2.488,3.652,1.539,8.629-2.113,11.113C259.528,244.719,246.223,248.219,232,248.219z"/>

      		<Svg.Path fill={this.color.shirt} d="M388.628,437.024l-10.126-81.012c-1.528-12.228-9.943-22.492-21.633-26.389l-39.047-13.016
      			c-6.8-2.267-14.45,0.154-18.291,6.206C285.349,345.157,260.424,360,232,360s-53.349-14.844-67.53-37.187
      			c-3.841-6.052-11.491-8.473-18.291-6.206l-39.047,13.016c-11.691,3.897-20.105,14.161-21.633,26.389l-10.126,81.012
      			c-1.791,14.324,9.379,26.977,23.815,26.977h265.626C379.249,464.001,390.419,451.348,388.628,437.024z"/>
      		<Svg.Path fill={this.color.arm} d="M92.168,340.168c-3.552,4.497-5.93,9.93-6.669,15.843l-10.126,81.012
      			C73.582,451.348,84.752,464,99.188,464H144v-52.067c0-7.697-2.774-15.135-7.813-20.953L92.168,340.168z"/>
      		<Svg.Path fill={this.color.arm} d="M371.832,340.168c3.552,4.497,5.93,9.93,6.669,15.843l10.126,81.012
      			c1.791,14.325-9.379,26.977-23.815,26.977H320v-52.067c0-7.697,2.774-15.135,7.813-20.953L371.832,340.168z"/>
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  child: {
    flex: 1
  }
});
