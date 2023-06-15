import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';



export const CodeViewer = ({ code }: any) => {
    const formattedCode = prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
    });

    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre>
            <code className="language-javascript line-numbers">{formattedCode}</code>
        </pre>
    );
};
