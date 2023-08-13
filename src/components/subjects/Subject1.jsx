import { useState } from "react";
import SQL from "../s1components/SQL";
import XSS from "../s1components/XSS";
import CSRF from "../s1components/CSRF";
import SM from "../s1components/SM";
import ID from "../s1components/ID";
import SDE from "../s1components/SDE";
import BAASM from "../s1components/BAASM";
import XXE from "../s1components/XXE";
import IDOR from "../s1components/IDOR";
import SSRF from "../s1components/SSRF";
import RCE from "../s1components/RCE";
import FUV from "../s1components/FUV";

function Subject1() {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const selectSubject = (subject) => {
        if (selectedSubject === subject) {
            setSelectedSubject(null);
          }
          else
          {
            setSelectedSubject(subject);
          }
    };

    return (
      <div>
        <h2>Web Application Vulnerabilities</h2>
        <p>
        Web application vulnerabilities are security weaknesses or flaws that exist in a web application. These vulnerabilities can be exploited by attackers to gain unauthorized access to sensitive information, inject malicious code, or take control of the application. Common types of web application vulnerabilities include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and file inclusion vulnerabilities.
        </p>
        <ul>
            
        <li onClick={() => selectSubject('sql')}>SQL Injection (SQLi)</li>
        {selectedSubject === 'sql' && <SQL />}
        
        <li onClick={() => selectSubject('xss')}>Cross-Site Scripting (XSS)</li>
        {selectedSubject === 'xss' && <XSS />}

        <li onClick={() => selectSubject('csrf')}>Cross-Site Request Forgery (CSRF)</li>
        {selectedSubject === 'csrf' && <CSRF />}
        
          <li onClick={() => selectSubject('sm')}>Security Misconfigurations</li>
          {selectedSubject === 'sm' && <SM />}

          <li onClick={() => selectSubject('id')}>Insecure Deserialization</li>
          {selectedSubject === 'id' && <ID/>}

          <li onClick={() => selectSubject('baasm')}>Broken Authentication and Session Management</li>
          {selectedSubject === 'baasm' && <BAASM/>}

          <li onClick={() => selectSubject('sde')}>Sensitive Data Exposure</li>
          {selectedSubject === 'sde' && <SDE/>}
          
          <li onClick={() => selectSubject('idor')}>Insecure Direct Object References (IDOR)</li>
          {selectedSubject === 'idor' && <IDOR/>}

          <li onClick={() => selectSubject('xxe')}>XML External Entity (XXE) Attacks</li>
          {selectedSubject === 'xxe' && <XXE/>}

          <li onClick={() => selectSubject('ssrf')}>Server-Side Request Forgery (SSRF)</li>
          {selectedSubject === 'ssrf' && <SSRF/>}

          <li onClick={() => selectSubject('rce')}>Remote Code Execution (RCE)</li>
          {selectedSubject === 'rce' && <RCE/>}

          <li onClick={() => selectSubject('fuv')}>File Upload Vulnerabilities</li>
          {selectedSubject === 'fuv' && <FUV/>}
        </ul>
        
      </div>
    );
  }
  
  export default Subject1;
  