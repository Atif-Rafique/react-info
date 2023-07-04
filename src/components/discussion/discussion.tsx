import React from 'react'
import { Collapse } from 'antd';
import { DISCUSSION_DATA } from './discussion-mock';


const { Panel } = Collapse;


const DiscussionComponent = () => {
    return (
        <div>

            <h2>Discussion</h2>

            <Collapse accordion>
                {DISCUSSION_DATA?.map((singleProgram: any) => (
                    <Panel header={singleProgram?.heading} key={singleProgram?.id}>
                        <p><strong>Statement:</strong> {singleProgram?.description}</p>
                    </Panel>
                ))}
            </Collapse>
        </div>
    )
}

export default DiscussionComponent