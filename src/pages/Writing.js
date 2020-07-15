import React from 'react';
import WritingTitle from "../components/WritingTitle";
import WritingCard from "../components/WritingCard";
import Wrapper from "../components/Wrapper";
import writing from "../components/writing.json";
function Writing() {
    return (
        <div>
            <WritingTitle />
            <Wrapper>
                <WritingCard
                    image={writing[0].image}
                    title={writing[0].title}
                    body={writing[0].body}
                    link={writing[0].link}
                />
                <WritingCard
                    image={writing[1].image}
                    title={writing[1].title}
                    body={writing[1].body}
                    link={writing[1].link}
                />
                <WritingCard
                    image={writing[2].image}
                    title={writing[2].title}
                    body={writing[2].body}
                    link={writing[2].link}
                />
            </Wrapper>
        </div>
    );
}

export default Writing;
