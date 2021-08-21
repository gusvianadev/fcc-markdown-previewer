import { useRef, useState, useEffect } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import { FaFreeCodeCamp, FaArrowsAlt } from 'react-icons/fa';
import { AppSty, ContainerSty } from './styles/App.styles';
import GlobalStyles from './styles/Global.styles';
import './styles/prism.css';
import MdText from './MdText';

const App = () => {
	const [mdText, setMdText] = MdText();
	const htmlConversion = marked(mdText, {
		breaks: true,
		highlight: (code, lang) => {
			console.log(lang);
			return Prism.highlight(
				code,
				Prism.languages.javascript,
				'javascript'
			);
		},
	});
	const parsedMdRef = useRef();
	const [currentFocus, setCurrentFocus] = useState(null);

	useEffect(() => {
		[
			...parsedMdRef.current.getElementsByTagName('code'),
			...parsedMdRef.current.getElementsByTagName('pre'),
		].forEach((el) => el.classList.add('language-javascript'));
	}, [mdText]);

	return (
		<AppSty>
			<GlobalStyles />
			<ContainerSty
				isFocused={currentFocus === 'editor' || !currentFocus}
				currentFocus={currentFocus}
			>
				<div className="container-title">
					<div>
						<FaFreeCodeCamp />
						editor
					</div>
					<FaArrowsAlt
						onClick={() =>
							!currentFocus
								? setCurrentFocus('editor')
								: setCurrentFocus(null)
						}
					/>
				</div>
				<textarea
					onChange={({ target }) => setMdText(target.value)}
					className="container-content"
					defaultValue={mdText}
					id="editor"
				/>
			</ContainerSty>
			<ContainerSty
				isFocused={currentFocus === 'preview' || !currentFocus}
			>
				<div className="container-title">
					<div>
						<FaFreeCodeCamp />
						previewer
					</div>
					<FaArrowsAlt
						onClick={() =>
							!currentFocus
								? setCurrentFocus('preview')
								: setCurrentFocus(null)
						}
					/>
				</div>
				<div
					className="container-content mdtext"
					ref={parsedMdRef}
					id="preview"
					dangerouslySetInnerHTML={{ __html: htmlConversion }}
				/>
			</ContainerSty>
		</AppSty>
	);
};

export default App;
