import React from 'react';
import {
    Text, View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const BalanceCategory = ({
    category,
}) => {

    return (
        <View style={styles.container}>
            {category.map((item, index) => (
                <TouchableOpacity
                    style={[styles.categoryWrap]}
                    key={index}
                    activeOpacity={0.5}
                >
                    <Image
                        style={styles.icon}
                        source={item.icon} />
                    <Text>{item.name}</Text>
                </TouchableOpacity>

            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20
    },
    categoryWrap: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    icon: {
        width: 35,
        height: 35,
        marginBottom: 5
    }
});

export default BalanceCategory;
