import {H2, Input, Button, View, XStack, YStack} from "tamagui";
import {ChevronRight} from "@tamagui/lucide-icons";
import { signUp } from "../services/authService";
import { useState } from 'react';

export default function signUp({title, items, navigate}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [full_name, setName] = useState('');
    const [username, setUsername] = useState('');

    return (
        <XStack
            w="100%"
            bg="$background"
            borderRadius="$5"
            p="$4"
            gap="$4"
            onPress={() => navigate()}
            alignItems="center"
            shadowOffset={{ width: 4, height: 4 }}
            shadowColor="rgba(0, 0, 0, 0.25)"
            shadowRadius={5}
        >
            <YStack gap="$3" width="90%">
                <H2>{title}</H2>
                <XStack width="100%" justifyContent="space-between">
                    <XStack  alignItems='center' gap="$2">
                        <Input onChangeText = {setUsername}>{ `Username: ${username}`}</Input>
                    </XStack>
                    <XStack  alignItems='center' gap="$2">
                        <Input onChangeText = {setEmail}>{ `Email: ${email}` }</Input>
                    </XStack>
                    <XStack  alignItems='center' gap="$2">
                        <Input onChangeText = {setPassword}>{ `Password: ${password}` }</Input>
                    </XStack>
                    <XStack>
                        <Button onClick={signUp}>Créer mon compte</Button>
                    </XStack>
                </XStack>
            </YStack>
            <View>
                <ChevronRight/>
            </View>
        </XStack>
    )
}