import React from 'react';
import { View, Text } from 'react-native';

const BmiComponent = ({ bmi }) => {
  const getBmiCategory = () => {
    if (isNaN(bmi)) {
      return "N.A";
    } else if (bmi < 16) {
      return "Severely Underweight";
    } else if (bmi >= 16 && bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Healthy";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const getTextColor = () => {
    if (isNaN(bmi)) {
      return "black"; // Default color for N.A
    } else if (bmi < 16) {
      return "purple"; // Adjust color for Severely Underweight
    } else if (bmi >= 16 && bmi < 18.5) {
      return "blue"; // Adjust color for Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return "green"; // Adjust color for Healthy
    } else if (bmi >= 25 && bmi < 30) {
      return "orange"; // Adjust color for Overweight
    } else {
      return "red"; // Adjust color for Obese
    }
  };

  return (
    <View>
      <Text style={{ color: getTextColor() }}>
        {!isNaN(bmi) ? `${bmi.toFixed(2)} (${getBmiCategory()})` : "N.A"}
      </Text>
    </View>
  );
};

export default BmiComponent;
