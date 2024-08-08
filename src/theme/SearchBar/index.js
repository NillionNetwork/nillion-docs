import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react'
import BrowserOnly from '@docusaurus/BrowserOnly';

/** Nillion's public cookbook API key - safe to show here */
const COOKBOOK_PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmIzZTA0NjU1N2UxOGI0Yjk2MTA3NjUiLCJpYXQiOjE3MjMwNjQzOTAsImV4cCI6MjAzODY0MDM5MH0.Xf2HZssthHYmIOZKLPuOtNo2tw1H6VSwbOi_76vXNIU";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <BrowserOnly>{() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} /> }</BrowserOnly>
    </>
  );
}
