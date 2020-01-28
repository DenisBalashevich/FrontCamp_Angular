import { sources } from "../models/mockedSources";

export class SourceService {
  getSource(id: String) {
    return sources.find(source => source.id === id);
  }
}
