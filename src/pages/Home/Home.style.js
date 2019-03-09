import styled from 'styled-components';

import Media from '../../styles/media';
import { primaryColor } from '../../styles/colors';
import { Container } from '../../styles/grid';

const Section = styled(Container)`
	span {
		color: ${primaryColor};
	}

	h1,
	h2 {
		font-family: Patua One, cursive;
		margin: 0px;
	}

	h1 {
		font-size: 4em;
		padding-bottom: 10px;
		letter-spacing: 5px;
		animation: name 3s 1;
	}

	h2 {
		font-size: 1.9em;
		animation: description 3s 1;
	}

	ul {
		padding: 0px 0px;
		display: flex;
		animation: icon 3s 1;
		margin-top: 0;
	}

	li {
		list-style-type: none;
		padding-right: 10px;
		padding-left: 10px;
	}

	@keyframes description {
		0% {
			opacity: 0;
		}
		80% {
			opacity: 0;
		}
	}

	@keyframes name {
		0% {
			margin-bottom: -50px;
		}
		30% {
			letter-spacing: 15px;
			margin-bottom: -50px;
		}
		80% {
			letter-spacing: 5px;
			margin-bottom: -50px;
		}
	}

	@keyframes icon {
		0% {
			opacity: 0;
			margin-top: -60px;
		}
		80% {
			opacity: 0;
			margin-top: -60px;
		}
	}

	${Media.tablet`
        h1 {
            font-size: 3em;
        }

        h2 {
            font-size: 1.5em;
            text-align: center;
        }

        @keyframes name {
            0% {
                margin-bottom: -50px;
            }
            30% {
                letter-spacing: 8px;
                margin-bottom: -50px;
            }
            80% {
                letter-spacing: 2px;
                margin-bottom: -50px;
            }
        }
    `}

	${Media.phone`
        h1 {
            letter-spacing: 2px;
            font-size: 2em;
        }

        h2 {
            font-size: 1em;
            text-align: center;
        }

        @keyframes name {
            0% {
                margin-bottom: -50px;
            }
            30% {
                letter-spacing: 5px;
                margin-bottom: -50px;
            }
            80% {
                letter-spacing: 2px;
                margin-bottom: -50px;
            }
        }
    `}
`;

export { Section };
