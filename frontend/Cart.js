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
        backgroundColor: '#fbf0df', // Soft beige background for warmth
        padding: 20, // Generous padding for breathing space
    },
    title: {
        fontSize: 26, // Slightly larger for emphasis
        fontWeight: 'bold',
        marginBottom: 30, // More space below the title
        color: '#333', // Darker for contrast
        textAlign: 'center',
    },
    itemContainer: {
        backgroundColor: '#ffffff', // Card-like appearance
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15, // More vertical padding for touch targets
        paddingHorizontal: 20, // More horizontal padding for content breathing room
        borderRadius: 10, // Rounded corners for a modern look
        shadowColor: '#000', // Shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, // Light shadow for subtlety
        shadowRadius: 4,
        elevation: 3, // Elevation for Android
        marginBottom: 15, // Space between items
    },
    itemName: {
        fontSize: 20, // Larger font size for readability
        color: '#000000',
        fontWeight: '500', // Medium weight for importance
    },
    itemQuantity: {
        fontSize: 18, // Uniform font size with the name for consistency
        color: '#666666', // Grey for less emphasis
        fontWeight: 'bold', // Bold to denote quantity clearly
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: '#4CA14C', // A vibrant color for the checkout action
        paddingVertical: 12,
        borderRadius: 25, // Fully rounded edges for a friendly touch
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000', // Shadow for button depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4, // Elevation for Android
    },
    checkoutButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default Cart;
