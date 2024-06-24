import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    const date = Date()
    
    return (
        <div className="max-w-4xl mx-auto mt-24 p-4 md:px-14 md:py-14 border border-gray-300 rounded-sm">
            <h1 className="text-3xl font-bold mb-5">Terms and Conditions</h1>

            <p className="mb-4">
                Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you in relation to this website.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Use of the Website</h2>
            <p className="mb-4">
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </p>

            <h2 className="text-2xl font-semibold mb-3">User Conduct</h2>
            <p className="mb-4">
                You must not use the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Privacy</h2>
            <p className="mb-4">
                Your privacy is very important to us. Please read our <Link to="/privacy-policy" className="text-blue-500">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Limitations of Liability</h2>
            <p className="mb-4">
                We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Changes to These Terms</h2>
            <p className="mb-4">
                We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].
            </p>

            <p className="text-sm text-gray-600 mt-10">
                Last updated: {date}
            </p>
        </div>
    );
};

export default Terms;