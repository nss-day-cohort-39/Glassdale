import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"

getCriminals().then(CriminalList)

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect)