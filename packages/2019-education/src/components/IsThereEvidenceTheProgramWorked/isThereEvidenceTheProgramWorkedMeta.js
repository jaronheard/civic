import IsThereEvidenceTheProgramWorkedVisualization from "./IsThereEvidenceTheProgramWorkedVisualization";

const IsThereEvidenceTheProgramWorkedMeta = (/* data */) => ({
  title: "Is There Evidence The Program Worked?",
  slug: "is-there-evidence-the-program-worked",
  introText: null,
  visualization: IsThereEvidenceTheProgramWorkedVisualization, // data, isLoading are passed to this as props
  additionalText: null,
  shareText: null,
  tags: [
    /* "Transportation", "Bus", "Rail", "Portland" */
  ],
  selector: null,
  analysis: null,
  metadata: null,
  resources: [
    {
      heading: "Organizations",
      items: [
        { link: "http://www.hackoregon.org", description: "Hack Oregon" },
        {
          link: "https://www.civicsoftwarefoundation.org",
          description: "Civic Software Foundation"
        },
        { link: "https://www.civicplatform.org", description: "Civic Platform" }
      ]
    }
  ],
  // authors likely an array of keys in the future
  authors: []
});

export default IsThereEvidenceTheProgramWorkedMeta;