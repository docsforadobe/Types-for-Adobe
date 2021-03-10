/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../14.0/index.d.ts" />

declare interface TextDocument {
  /** The text layer’s spacing between lines. */
  leading: number
}

declare interface Project {
  /** Creates a new team project. */
  newTeamProject(teamProjectName: string, description: string): boolean

  /** Opens a team project. */
  openTeamProject(teamProjectName: string): boolean

  /** Shares the currently open team project. */
  shareTeamProject(comment: string): boolean

  /** Syncs the currently open team project. */
  syncTeamProject(): boolean

  /** Closes a currently open team project. */
  closeTeamProject(): boolean

  /** Converts a team project to an After Effects project on a local disk. */
  convertTeamProjectToProject(project_file: File): boolean

  /** Returns an array containing the name strings for all team projects available for the current user. Archived Team Projects are not included. */
  listTeamProjects(): string[]

  /** Checks whether specified team project is currently open. */
  isTeamProjectOpen(teamProjectName: string): boolean

  /** Checks whether any team project is currently open. */
  isAnyTeamProjectOpen(): boolean

  /** Checks whether or not team projects is enabled for After Effects. (This will almost always return true.) */
  isTeamProjectEnabled(): boolean

  /** Checks whether or not the client (After Effects) is currently logged into the team project server. */
  isLoggedInToTeamProject(): boolean

  /** Checks whether or not the Sync command is enabled. */
  isSyncCommandEnabled(): boolean

  /** Checks whether or not the Share command is enabled. */
  isShareCommandEnabled(): boolean

  /** Checks whether or not the Resolve command is enabled. */
  isResolveCommandEnabled(): boolean

  /** Resolves a conflict between the open team project and the version on the team projects server, using the specified resolution method. */
  resolveConflict(ResolveType: ResolveType): boolean
}
