import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    todosContainer: {
        flex: 1,
        marginHorizontal: 5,
        flexDirection: 'row',
        marginVertical: 5,
    },

    schedule: {
        backgroundColor: 'green',
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 3,
        borderRadius : 10
    },
    image: {
      
    },
    imageIn: {
       height: 250,
       width: 60,
       borderRadius : 10
      
    },
    name: {
        color: 'red',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold'
    },
});

