'use client'
import React from 'react'
import { 
    Button,
} from 'react-native'
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
    // ...

    return (
        <MainLayout>
             <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        </MainLayout>
    );
}

export default AboutScreen