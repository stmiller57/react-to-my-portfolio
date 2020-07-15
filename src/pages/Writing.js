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
            <Wrapper>
                <WritingCard
                    image={writing[3].image}
                    title={writing[3].title}
                    body={writing[3].body}
                    link={writing[3].link}
                />
                <WritingCard
                    image={writing[4].image}
                    title={writing[4].title}
                    body={writing[4].body}
                    link={writing[4].link}
                />
                <WritingCard
                    image={writing[5].image}
                    title={writing[5].title}
                    body={writing[5].body}
                    link={writing[5].link}
                />
            </Wrapper>
        </div>
    );
}

export default Writing;
