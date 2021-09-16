const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: false,
    important: true,
    prefix: '_',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink,
		},
		fontSize: {
			xs: ['0.688rem', { lineHeight: '1rem' }],
			sm: ['0.75rem', { lineHeight: '1.25rem' }],
			base: ['0.875rem', { lineHeight: '1.5rem' }],
			lg: ['1rem', { lineHeight: '1.75rem' }],
			xl: ['1.125rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.25rem', { lineHeight: '2rem' }],
			'3xl': ['1.5rem', { lineHeight: '2.25rem' }],
			'4xl': ['1.875rem', { lineHeight: '2.5rem' }],
			'5xl': ['2.25rem', { lineHeight: '1' }],
			'6xl': ['3rem', { lineHeight: '1' }],
			'7xl': ['3.75rem', { lineHeight: '1' }],
			'8xl': ['4.5rem', { lineHeight: '1' }],
			'9xl': ['6rem', { lineHeight: '1' }],
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
		},
		margin: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
		}),
		padding: (theme) => theme('spacing'),
		space: (theme) => theme('spacing'),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '5p': '5%',
            '10p': '10%',
            '15p': '15%',
            '20p': '20%',
            '25p': '25%',
            '30p': '30%',
            '35p': '35%',
            '40p': '40%',
            '45p': '45%',
            '50p': '50%',
            '55p': '55%',
            '60p': '60%',
            '65p': '65%',
            '70p': '70%',
            '75p': '75%',
            '80p': '80%',
            '85p': '85%',
            '90p': '90%',
            '95p': '95%',
            '100p': '100%',
            screen: '100vw',
        }),
	},
    corePlugins: [
        'preflight',
        'alignContent',
        'alignItems',
        'alignSelf',
        'backgroundColor',
        'borderColor',
        'borderRadius',
        'borderWidth',
        'boxShadow',
        'clear',
        'cursor',
        'display',
        'divideColor',
        'divideWidth',
        'flex',
        'flexDirection',
        'flexGrow',
        'flexShrink',
        'flexWrap',
        'float',
        'fontSize',
        'fontStyle',
        'fontWeight',
        'height',
        'justifyContent',
        'justifyItems',
        'justifySelf',
        'letterSpacing',
        'lineHeight',
        'margin',
        'overflow',
        'padding',
        'placeContent',
        'placeItems',
        'placeSelf',
        'position',
        'space',
        'textAlign',
        'textColor',
        'textDecoration',
        'textOverflow',
        'textTransform',
        'userSelect',
        'verticalAlign',
        'width',
    ],
	variants: {
        accessibility: [],
        alignContent: [],
        alignItems: [],
        alignSelf: [],
        appearance: [],
        backgroundAttachment: [],
        backgroundClip: [],
        backgroundColor: [],
        backgroundImage: [],
        gradientColorStops: [],
        backgroundOpacity: [],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColor: [],
        borderOpacity: [],
        borderRadius: [],
        borderStyle: [],
        borderWidth: [],
        boxShadow: [],
        boxSizing: [],
        container: [],
        cursor: [],
        display: [],
        divideColor: [],
        divideOpacity: [],
        divideStyle: [],
        divideWidth: [],
        fill: [],
        flex: [],
        flexDirection: [],
        flexGrow: [],
        flexShrink: [],
        flexWrap: [],
        float: [],
        clear: [],
        fontFamily: [],
        fontSize: [],
        fontSmoothing: [],
        fontVariantNumeric: [],
        fontStyle: [],
        fontWeight: [],
        height: [],
        inset: [],
        justifyContent: [],
        justifyItems: [],
        justifySelf: [],
        letterSpacing: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        margin: [],
        maxHeight: [],
        maxWidth: [],
        minHeight: [],
        minWidth: [],
        objectFit: [],
        objectPosition: [],
        opacity: [],
        order: [],
        outline: [],
        overflow: [],
        overscrollBehavior: [],
        padding: [],
        placeContent: [],
        placeItems: [],
        placeSelf: [],
        placeholderColor: [],
        placeholderOpacity: [],
        pointerEvents: [],
        position: [],
        resize: [],
        space: [],
        stroke: [],
        strokeWidth: [],
        tableLayout: [],
        textAlign: [],
        textColor: [],
        textOpacity: [],
        textDecoration: [],
        textTransform: [],
        userSelect: [],
        verticalAlign: [],
        visibility: [],
        whitespace: [],
        width: [],
        wordBreak: [],
        zIndex: [],
        gap: [],
        gridAutoFlow: [],
        gridTemplateColumns: [],
        gridAutoColumns: [],
        gridColumn: [],
        gridColumnStart: [],
        gridColumnEnd: [],
        gridTemplateRows: [],
        gridAutoRows: [],
        gridRow: [],
        gridRowStart: [],
        gridRowEnd: [],
        transform: [],
        transformOrigin: [],
        scale: [],
        rotate: [],
        translate: [],
        skew: [],
        transitionProperty: [],
        transitionTimingFunction: [],
        transitionDuration: [],
        transitionDelay: [],
        animation: [],
	}
}
