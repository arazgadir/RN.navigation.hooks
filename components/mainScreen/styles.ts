import { StyleSheet } from 'react-native';


    export const styles = StyleSheet.create({

        container: {
            ...StyleSheet.absoluteFillObject,
            flex: 1, //the container will fill the whole screen.
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: '100%',
            width : '100%'
        },
         map: {
            ...StyleSheet.absoluteFillObject,
          },
          text: {
           color :'blue',
           fontSize : 12

          },
    });
    
