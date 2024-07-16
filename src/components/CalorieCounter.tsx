import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

const Text = styled.span`
    font-size: 35px;
    font-weight: bold;
`;

const Value = styled.div`
    font-size: 35px;
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
    text-align: right;
    min-width: 60px;
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin: 2px 0;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`;

interface CalorieCounterProps {
    currentCalories: number;
    targetCalories: number;
    onChangeTargetCalories: (newTarget: number) => void;
}

const useCountAnimation = (value: number, shouldAnimate: boolean) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!shouldAnimate) {
            setDisplayValue(value);
            return;
        }

        let start = 0;
        const end = value;
        if (start === end) return;

        const duration = 3000; // 3 seconds
        const increment = end > start ? 1 : -1;
        const easeOutQuad = (t: number) => t * (2 - t);
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        const startTime = performance.now();

        const timer = setInterval(() => {
            const elapsedTime = performance.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuad(progress);
            start = Math.round(easedProgress * (end - start) + start);
            setDisplayValue(start);
            if (progress === 1) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [value, shouldAnimate]);

    return displayValue;
};

const getColorForCalories = (current: number, target: number) => {
    if (current > target) {
        return 'red';
    }
    const percentage = (current / target) * 100;
    if (percentage < 50) {
        return 'green';
    } else if (percentage < 100) {
        return `rgb(255, ${Math.round(255 - ((percentage - 50) * 2.55))}, 0)`;
    }
    return 'red';
};

const CalorieCounter: React.FC<CalorieCounterProps> = ({
                                                           currentCalories,
                                                           targetCalories,
                                                           onChangeTargetCalories,
                                                       }) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const animatedCurrentCalories = useCountAnimation(currentCalories, isFirstLoad);
    const animatedTargetCalories = useCountAnimation(targetCalories, isFirstLoad);

    useEffect(() => {
        setIsFirstLoad(false);
    }, []);

    const color = getColorForCalories(currentCalories, targetCalories);

    return (
        <Container className="calorie-counter">
            <div>
                <Text>Aktuelle Kalorien:</Text> <Value>{animatedCurrentCalories}</Value>
            </div>
            <div>
                <Text>Gewünschte Kalorien:</Text>
                <Value style={{ color }}>
                    {animatedTargetCalories}
                    <ButtonsContainer>
                        <Button onClick={() => onChangeTargetCalories(targetCalories + 50)}>⬆</Button>
                        <Button onClick={() => onChangeTargetCalories(targetCalories - 50)}>⬇</Button>
                    </ButtonsContainer>
                </Value>
            </div>
        </Container>
    );
};

export default CalorieCounter;
