"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: '1', description: 'Groceries', amount: 50.75, date: '2023-05-15', category: 'Food' },
    { id: '2', description: 'Gas', amount: 40.00, date: '2023-05-16', category: 'Transportation' },
    { id: '3', description: 'Movie tickets', amount: 25.00, date: '2023-05-17', category: 'Entertainment' },
  ]);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (description && amount) {
      const newExpense: Expense = {
        id: Date.now().toString(),
        description,
        amount: parseFloat(amount),
        date: new Date().toISOString().split('T')[0],
        category
      };
      
      setExpenses([newExpense, ...expenses]);
      setDescription('');
      setAmount('');
      setCategory('Food');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100" data-test-id="dashboard-page">
      <header className="bg-white shadow" data-test-id="dashboard-header">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900" data-test-id="dashboard-title">Expense Tracker</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700" data-test-id="user-welcome">Welcome, {user}!</span>
            <Button onClick={handleLogout} variant="outline" data-test-id="logout-button">Logout</Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Add Expense Form */}
          <div className="lg:col-span-1">
            <Card data-test-id="add-expense-card">
              <CardHeader>
                <CardTitle data-test-id="add-expense-title">Add New Expense</CardTitle>
                <CardDescription data-test-id="add-expense-description">Track your spending</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddExpense} className="space-y-4" data-test-id="add-expense-form">
                  <div className="space-y-2">
                    <Label htmlFor="description" data-test-id="description-label">Description</Label>
                    <Input
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="What did you spend on?"
                      required
                      data-test-id="description-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="amount" data-test-id="amount-label">Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      required
                      data-test-id="amount-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" data-test-id="category-label">Category</Label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      data-test-id="category-select"
                    >
                      <option value="Food" data-test-id="category-food">Food</option>
                      <option value="Transportation" data-test-id="category-transportation">Transportation</option>
                      <option value="Entertainment" data-test-id="category-entertainment">Entertainment</option>
                      <option value="Utilities" data-test-id="category-utilities">Utilities</option>
                      <option value="Other" data-test-id="category-other">Other</option>
                    </select>
                  </div>
                  
                  <Button type="submit" className="w-full" data-test-id="add-expense-button">Add Expense</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Expense List */}
          <div className="lg:col-span-2">
            <Card data-test-id="expense-list-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle data-test-id="expense-list-title">Recent Expenses</CardTitle>
                    <CardDescription data-test-id="expense-list-description">Your spending history</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500" data-test-id="total-expenses-label">Total Expenses</p>
                    <p className="text-2xl font-bold" data-test-id="total-expenses-amount">${totalExpenses.toFixed(2)}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {expenses.length === 0 ? (
                  <p className="text-center text-gray-500 py-4" data-test-id="no-expenses-message">No expenses recorded yet</p>
                ) : (
                  <Table data-test-id="expenses-table">
                    <TableHeader>
                      <TableRow>
                        <TableHead data-test-id="description-header">Description</TableHead>
                        <TableHead data-test-id="category-header">Category</TableHead>
                        <TableHead data-test-id="date-header">Date</TableHead>
                        <TableHead className="text-right" data-test-id="amount-header">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {expenses.map((expense) => (
                        <TableRow key={expense.id} data-test-id={`expense-row-${expense.id}`}>
                          <TableCell className="font-medium" data-test-id={`expense-description-${expense.id}`}>{expense.description}</TableCell>
                          <TableCell data-test-id={`expense-category-${expense.id}`}>
                            <Badge variant="secondary" data-test-id={`expense-category-badge-${expense.id}`}>{expense.category}</Badge>
                          </TableCell>
                          <TableCell data-test-id={`expense-date-${expense.id}`}>{expense.date}</TableCell>
                          <TableCell className="text-right" data-test-id={`expense-amount-${expense.id}`}>${expense.amount.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;