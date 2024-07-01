/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError, AxiosHeaders } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { logout, useCurrentUserToken } from '@/redux/features/auth/authSlice';

// Create an Axios instance with a base URL
const axiosSecure = axios.create({
  baseURL: 'https://l2-b2-frontend-path-assignment-7-server-kappa.vercel.app',
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUserToken = useAppSelector(useCurrentUserToken);

  useEffect(() => {
    // Add a request interceptor to inject the authorization header
    axiosSecure.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (currentUserToken) {
        if (!config.headers) {
          config.headers = new AxiosHeaders();
        }
        config.headers.set('Authorization', `Bearer ${currentUserToken}`);
      }
      return config;
    });

    // Add a response interceptor to handle unauthorized responses (401 or 403)
    axiosSecure.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Call logout asynchronously to clear user data
          dispatch(logout());
          // Redirect the user to the login page
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

  }, [navigate, dispatch, currentUserToken]);

  return [axiosSecure];
};

export default useAxiosSecure;
