import FileExplorer from "./component/FileExplorer";
import "./styles.css";
import data from "./data.json";

export default function App() {
  return <FileExplorer folderData={data} />;
}
