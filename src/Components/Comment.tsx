import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void;

}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCont, setLikeCont] = useState(0)
    
    function handleDeleteComment() {

        onDeleteComment(content)
    }

    // function handleLikeComment() {
    //     setLikeCont(likeCont + 1)
    // }

    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/anjosmarcos.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Marcos Alexandre</strong>
                            <time>há 3 minutos</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24} weight='bold' />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                    <footer>
                        <button onClick={() => {
                            setLikeCont(likeCont + 1)
                        
                        }}>
                            <ThumbsUp size={24} weight='bold' />
                                Aplaudir <span>{likeCont}</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}