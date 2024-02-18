import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Cart = () => {
    // Dummy data for cart items
    const cartItems = [
        { id: '1', name: 'Spaghetti (200g)', quantity: '$$$'},
        { id: '2', name: 'Bacon (100g)', quantity: '$$$' },
        { id: '3', name: 'Eggs (2pc)', quantity: '$$$' },
        { id: '4', name: 'Parmesan Cheese (50g)', quantity: '$$$' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemQuantity}>{item.quantity}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fbf0df',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    itemName: {
        fontSize: 18,
        color: '#000000',
    },
    itemQuantity: {
        fontSize: 16,
        color: '#666666',
    },
});

export default Cart;
