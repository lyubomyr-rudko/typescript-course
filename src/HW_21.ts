function HW_21() {
  class FileReader {
    read(file: string): string {
      console.log(`Reading content from file: ${file}`);
      return `Content of ${file}`;
    }
  }

  class FileWriter {
    write(file: string, content: string): void {
      console.log(`Writing content to file: ${file}`);
      console.log(`Content: ${content}`);
    }
  }

  class FileFacade {
    private reader: FileReader;
    private writer: FileWriter;

    constructor() {
      this.reader = new FileReader();
      this.writer = new FileWriter();
    }

    readFile(file: string): string {
      return this.reader.read(file);
    }

    writeFile(file: string, content: string): void {
      this.writer.write(file, content);
    }
  }

  function example(fileFacade: FileFacade): void {
    const fileName = "example.txt";

    const content = fileFacade.readFile(fileName);
    console.log(`File content: ${content}`);

    const newContent = "New content for the file";
    fileFacade.writeFile(fileName, newContent);
  }

  const fileFacade = new FileFacade();
  example(fileFacade);
}

HW_21();