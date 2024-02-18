import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font'; // Import useFonts from expo-font

const initialCartItems = [
    { id: '1', name: 'Spaghetti (200g)'},
    { id: '2', name: 'Bacon (100g)'},
    { id: '3', name: 'Eggs (2pc)'},
    { id: '4', name: 'Parmesan Cheese (50g)'},
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [loaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'), // Load Poppins-Regular font
    });    
    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        // Here you would typically navigate to a checkout screen or perform a checkout action
        console.log('Proceeding to checkout...');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeItemButton}>
                            <Text style={styles.removeItemButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    removeItemButton: {
        backgroundColor: '#ff6347', // Bright color for visibility
        paddingHorizontal: 15, // Increased padding for a wider button
        paddingVertical: 8, // Slightly taller button for easier interaction
        borderRadius: 15, // More pronounced rounded corners for a modern look
        marginLeft: 10, // Space from the quantity or item name
        shadowColor: '#000', // Shadow for depth
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        fontFamily: 'Poppins-Regular',

        shadowRadius: 2.22,
        elevation: 3, // Elevation for Android
    },
    removeItemButtonText: {
        color: '#FFFFFF',
        fontSize: 16, // Slightly larger for better readability
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular',

    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: '#4CA14C', // Vibrant color for the action
        paddingVertical: 15, // More padding for a taller button
        borderRadius: 30, // Fully rounded edges for a soft, friendly touch
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 20, // Ensure some space from screen edges
    },
    checkoutButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        fontSize: 22, // More prominent size for the call to action
        fontWeight: 'bold',
    },
    // Assuming there are more styles for itemContainer, itemName, and itemQuantity
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20, // Increased padding for more space inside each item
        backgroundColor: '#ffffff', // Keeping the card-like appearance
        borderRadius: 20, // More pronounced rounded corners
        marginVertical: 10, // Space between items
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    itemName: {
        fontSize: 20, // Larger font size for readability
        color: '#000000',
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        flexShrink: 1, // Ensure text fits within the available space
    },
    
});


export default Cart;
