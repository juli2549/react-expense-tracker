"use client";

import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use admin/admin');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" data-test-id="login-page">
      <Card className="w-full max-w-md" data-test-id="login-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center" data-test-id="login-title">Expense Tracker</CardTitle>
          <CardDescription className="text-center" data-test-id="login-description">Sign in to your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} data-test-id="login-form">
          <CardContent className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center" data-test-id="login-error">{error}</div>
            )}
            <div className="space-y-2">
              <Label htmlFor="username" data-test-id="username-label">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                data-test-id="username-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" data-test-id="password-label">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin"
                required
                data-test-id="password-input"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full" data-test-id="login-button">Sign In</Button>
            <div className="mt-4 text-sm text-gray-500" data-test-id="demo-credentials">
              <p>Demo credentials: admin / admin</p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;