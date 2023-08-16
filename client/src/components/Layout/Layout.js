import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
// import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>

                <meta charSet='utf-8' />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />

                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "80vh" }}>
              <Toaster/>
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: 'FOODERA - Buy now',
    description: 'Foodera in sell the Healthy foods.',
    keywords: 'MERN,React,Node,MongoDB',
    author: 'Sankalp Pratap Singh',
}

export default Layout;