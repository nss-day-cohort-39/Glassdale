import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NotesList.js"
import "./criminals/KnownAssociatesDialog.js"
import "./witnesses/WitnessList.js"
import { WitnessStatementButton } from "./witnesses/WitnessStatementButton.js"

getCriminals()
    .then(CriminalList)
    .then(NotesList)
    .then(NoteForm)

getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()


WitnessStatementButton()