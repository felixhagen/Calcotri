import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.6);
    width: 250px;
    font-size: 16px;
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(45deg, orange, yellow);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    &:hover {
        background: linear-gradient(45deg, yellow, orange);
        box-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
    }
`;

interface InputFieldProps {
    onAddItem: (item: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = async () => {
        try {
            const response = await axios.get(`API_URL?item=${inputValue}`);
            onAddItem(response.data);
            setInputValue('');
        } catch (error) {
            console.error('Error fetching the item:', error);
        }
    };

    return (
        <Container>
            <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Artikel eingeben ..."
            />
            <Button onClick={handleAddItem}>Hinzufügen</Button>
        </Container>
    );
};

export default InputField;
