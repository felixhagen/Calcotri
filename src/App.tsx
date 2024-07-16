import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './components/InputField';
import NutritionTable from './components/NutritionTable';

const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 84vh;
    padding: 1cm;
    gap: 0,5cm;
`;

const ContentContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex: 2.3; 
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: -20px;
    margin-top: -20px;
`;

const Sidebar = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex: 0.7;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: 60px;
    margin-top: -20px;
`;

const App: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    const addItem = (item: any) => {
        setItems([...items, { ...item, quantity: 0, unit: 'g' }]);
    };

    const updateItem = (index: number, quantity: number, unit: string) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], quantity, unit };
        setItems(newItems);
    };

    return (
        <MainContainer className="main-container">
            <ContentContainer className="content">
                <InputField onAddItem={addItem} />
                <NutritionTable items={items} onUpdateItem={updateItem} />
            </ContentContainer>
            <Sidebar className="sidebar">
                <h2>Mengenangabe</h2>
                <p>Angabe der Gesamtwerte zur Ermittlung des Maximalwerts.</p>
                {/* Fügen Sie hier den Inhalt des zweiten Containers ein */}
            </Sidebar>
        </MainContainer>
    );
};

export default App;
