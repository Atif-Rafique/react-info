import { Collapse } from 'antd';
import { PROGRAMS_DATA } from './programs-mock';
import { CodeViewer } from '../common/formatter/formatter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';


const { Panel } = Collapse;




const ProgramsComponent = () => {

    const [copiedIndex, setCopiedIndex] = useState<string | null>(null);




    useEffect(() => {
        if (copiedIndex !== null) {
            const timeout = setTimeout(() => {
                setCopiedIndex(null);
            }, 3000); // Set the timeout duration in milliseconds

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [copiedIndex]);



    return (
        <div>

            <h2>Programs</h2>

            <Collapse accordion>
                {PROGRAMS_DATA?.map((singleProgram: any) => (
                    <Panel header={singleProgram?.heading} key={singleProgram?.id}>
                        <p><strong>Statement:</strong> {singleProgram?.description}</p>
                        <img src={singleProgram?.img} alt={singleProgram?.name} />
                        <pre>{singleProgram?.codeExplanation}</pre>
                        <pre>
                            <CopyToClipboard text={singleProgram?.code} onCopy={() => setCopiedIndex(singleProgram?.id)}>
                                <button>{copiedIndex === singleProgram?.id ? 'Copied!' : 'Copy given Code!'}</button>
                            </CopyToClipboard>
                        </pre>
                        <CodeViewer code={singleProgram?.code} />
                    </Panel>
                ))}
            </Collapse>

        </div>
    )
}

export default ProgramsComponent;
