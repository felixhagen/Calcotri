import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
    width: 100%;
    padding-left: 0cm;
    padding-right: 1cm;
    display: flex;
    justify-content: center;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

const Thead = styled.thead`
    background: linear-gradient(to top right, #ff7f50, #ff9a47); // Farbverlauf von links unten nach rechts oben
    border-radius: 10px; // Abrunden der Ecken des Headers
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    color: #fff;  // Textfarbe auf Weiß setzen
`;

const ThFirst = styled(Th)`
    border-top-left-radius: 10px;  // Abrunden der oberen linken Ecke
`;

const ThLast = styled(Th)`
    border-top-right-radius: 10px;  // Abrunden der oberen rechten Ecke
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const Input = styled.input`
    width: 50px;
`;

const Select = styled.select`
    margin-left: 10px;
`;

const Button = styled.button`
    margin-left: 10px;
`;

const units = ['g', 'kg', 'ml', 'l', 'pcs'];

interface NutritionTableProps {
    items: any[];
    onUpdateItem: (index: number, quantity: number, unit: string) => void;
}

const NutritionTable: React.FC<NutritionTableProps> = ({ items, onUpdateItem }) => {
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState(units[0]);

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <tr>
                        <ThFirst>Artikel</ThFirst>
                        <Th>Menge</Th>
                        <Th><input type="checkbox" /><br />Fett</Th>
                        <Th><input type="checkbox" /><br />Ges. Fettsäuren</Th>
                        <Th><input type="checkbox" /><br />Kohlenhydrate</Th>
                        <Th><input type="checkbox" /><br />Zucker</Th>
                        <Th><input type="checkbox" /><br />Eiweiß</Th>
                        <Th><input type="checkbox" /><br />Salz</Th>
                        <Th><input type="checkbox" /><br />Alkohol</Th>
                        <ThLast><input type="checkbox" /><br />Kalorien (kcal)</ThLast>
                    </tr>
                </Thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>
                            {editIndex === index ? (
                                <>
                                    <Input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                    />
                                    <Select value={unit} onChange={(e) => setUnit(e.target.value)}>
                                        {units.map((u) => (
                                            <option key={u} value={u}>
                                                {u}
                                            </option>
                                        ))}
                                    </Select>
                                    <Button
                                        onClick={() => {
                                            onUpdateItem(index, quantity, unit);
                                            setEditIndex(null);
                                        }}
                                    >
                                        Bestätigen
                                    </Button>
                                </>
                            ) : (
                                <span onClick={() => setEditIndex(index)}>{`${item.quantity} ${item.unit}`}</span>
                            )}
                        </Td>
                        <Td>{item.fat}</Td>
                        <Td>{item.saturatedFat}</Td>
                        <Td>{item.carbs}</Td>
                        <Td>{item.sugar}</Td>
                        <Td>{item.protein}</Td>
                        <Td>{item.salt}</Td>
                        <Td>{item.alcohol}</Td>
                        <Td>{item.calories}</Td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </TableContainer>
    );
};

export default NutritionTable;
