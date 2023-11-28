import React, { useState } from 'react';

function PostForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
       /*  e.preventDefault(); */
        onSubmit({ title, content, image });
        setTitle('');
        setContent('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titolo:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Immagine:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div>
                <label>Contenuto:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Crea Post</button>
        </form>
    );
}

export default PostForm;
