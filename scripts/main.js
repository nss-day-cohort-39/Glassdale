import "./witnesses/WitnessList.js"
import "./facilities/FacilityList.js"
import "./criminals/KnownAssociatesDialog.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NotesList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { WitnessStatementButton } from "./witnesses/WitnessStatementButton.js"
import { DisplayFacilitiesButton } from "./facilities/DisplayFacilitiesButton.js"

getCriminals()
    .then(CriminalList)
    .then(NotesList)
    .then(NoteForm)

getConvictions()
    .then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()
WitnessStatementButton()
DisplayFacilitiesButton()