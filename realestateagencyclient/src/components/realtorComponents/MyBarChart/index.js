import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getAllReobjects } from '../../utils/ApiFunctions';

const MyBarChart = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [reobjects, setReobjects] = useState([]);
  const [data, setData] = useState([]);

  const fetchObjects = async () => {
    try {
      const result = await getAllReobjects();
      setReobjects(result);

      const typeCounts = result.reduce((acc, obj) => {
        const type = obj.type;

        if (!acc[type]) {
          acc[type] = 0;
        }
        acc[type] += 1;
        return acc;
      }, {});

      const chartData = [
        { name: 'Квартира', объявления: typeCounts['Квартира'] || 0 },
        { name: 'Дом', объявления: typeCounts['Дом'] || 0 },
        { name: 'Участок', объявления: typeCounts['Участок'] || 0 },
        { name: 'Комната', объявления: typeCounts['Комната'] || 0 },
      ];

      setData(chartData);

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchObjects();
  }, []);

  return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="объявления" fill="#ff8a00" />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default MyBarChart;