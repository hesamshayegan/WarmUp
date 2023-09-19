import React from "react";
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {

    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={18}
            color='255, 247, 0'
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={2}
            trailingSpeed={1}
            showSystemCursor={false}
            innerStyle={null}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    )


}

export default AnimCursor;