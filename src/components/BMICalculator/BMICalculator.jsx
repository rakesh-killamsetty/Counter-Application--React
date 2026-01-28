import React from 'react'
import { useState, useEffect } from 'react'
import './BMICalculator.css'

function BMICalculator() {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedHeight = localStorage.getItem('height');
        const savedWeight = localStorage.getItem('weight');

        if (savedHeight) setHeight(parseInt(savedHeight));
        if (savedWeight) setWeight(parseInt(savedWeight));
    }, []);

    // Save data to localStorage whenever height or weight changes
    useEffect(() => {
        const currentBmi = (weight > 0 && height > 0) ? (weight / ((height / 100) * (height / 100))).toFixed(2) : 'N/A';
        localStorage.setItem('height', height.toString());
        localStorage.setItem('weight', weight.toString());
        localStorage.setItem('bmi', currentBmi);
    }, [height, weight]);

    const heightIncrement=() => setHeight(h => h + 1)
    const heightDecrement=() => setHeight(h => h - 1)
    const weightIncrement=() => setWeight(w => w + 1)
    const weightDecrement=() => setWeight(w => w - 1)


    const bmi=(weight > 0 && height > 0) ? (weight / ((height / 100) * (height / 100))).toFixed(2) : 'N/A'
  return (
    <div className="bmi-calculator">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index (BMI) to assess your weight category.</p>
        <span>20-25 is normal, 25-30 is overweight, 30+ is obese, below 20 is underweight</span>
        <div className="bg-gray">
            <p>Height (in cm):</p>
            <div className="value-display">{height}</div>
            <div className="button-group">
                <button onClick={heightIncrement}>+</button>
                <button onClick={heightDecrement}>-</button>
            </div>
        </div>
        <div className="bg-gray">
            <p>Weight (in kg):</p>
            <div className="value-display">{weight}</div>
            <div className="button-group">
                <button onClick={weightIncrement}>+</button>
                <button onClick={weightDecrement}>-</button>
            </div>
        </div>
        <div className="bg-gray bmi-result">
            <p>Your BMI is:</p>
            <div className="value-display">{bmi}</div>
            <p className="auto-save-notice">Data is automatically saved to local storage</p>
        </div>
    </div>
  )
}

export default BMICalculator
