import React, {useState} from "react";

export default function TextForm(props){
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);
    const [count,setCount] = useState(0);
    const [tot,setTot] = useState(0);

    const handalUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Converted In Upper Case','success');
    }
    const handalOnChange = (event)=>{
        const targetTest = event.target.value;
        setText(targetTest);
        handalCount(text);
        
    }

    const handalCount = (val)=>{
        const totwcount = val.split(/\s+/).filter(word => word.length > 0);
        const count = totwcount.length;
        const tot = val.length;

        setCount(count);
        setTot(tot);
    };
    const handalLowClick = ()=>{
        let lowText = text.toLowerCase();
        props.showAlert('Text Converted In Lower Case','success');
        setText(lowText);
    }
    const handalClearText = ()=>{
        setText("");
        props.showAlert('Text Cleared','success');
        handalCount("");
    }

    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Coppied','success');
    }
    const handleAddNote = ()=>{
        if (text.trim()) {
            setNotes([...notes, text]);
            setText("");
            props.showAlert('Text Note Added Succesfully','success');
        }
    }
    const handleClearNote = ()=>{
        setNotes([]);
        props.showAlert('All clear','success');
    }
    const handlePasteText = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setText(prevText => prevText + clipboardText);
        } catch (err) {
            alert("Failed to paste text. Please allow clipboard access.");
        }
        props.showAlert('Text Pasted','success');
        handalCount(text);
    };
    
    
    return(
        <>
            <div style={{color:props.mode==='light' ? 'white' : 'black'}}>
                <div className="mb-3" >
                    <h2 style={{color:props.mode==='light' ? 'black' : 'white'}}>{props.heading}</h2>
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handalOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#054095',color:props.mode==='light' ? 'black' : 'white'}}></textarea>
                </div>
                <button type="submit" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'}`} onClick={handalUpClick}>Uppercase</button>
                <button type="submit" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'} mx-2`} onClick={handalLowClick}>Lowecase</button>
                <button type="submit" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'}`} onClick={handalClearText}>Cleare All</button>
                <button type="button" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'} mx-2`} onClick={handleCopyText}>Copy Text</button>
                <button type="button" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'}`} onClick={handleAddNote}>Add Note</button>
                <button type="button" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'} mx-2`} onClick={handleClearNote}>Cleare Note</button>
                <button type="button" className={`btn btn-${props.mode==='dark' ? 'dark' : 'primary'} mx-2`} onClick={handlePasteText}>Past</button>
            </div>
            <div className="container" style={{color:props.mode==='light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{count} words and {tot} char</p>
                <p>{text.length*0.008} to read this text</p>
                <h2>Prewiew</h2>
                <p>{text}</p>
            </div>
            <div id="notes" className="my_note" style={{color:props.mode==='light' ? 'black' : 'white'}}>
                <h2>Your Notes:</h2>
                {notes.length === 0 ? <p>No notes yet.</p> : 
                    notes.map((note, index) => (
                        <p key={index} className="note">{note}</p>
                    ))
                }
            </div>
        </>
    )
}