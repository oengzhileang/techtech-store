export interface DatabaseConfigInterface {
  uri: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    // Add other options as needed
  };
}
