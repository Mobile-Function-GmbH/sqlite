export interface CapacitorSQLitePlugin {
    /**
     * Check if a passphrase exists in a secure store
     *
     * @return Promise<capSQLiteResult>
     * @since 3.0.0-beta.13
     */
    isSecretStored(): Promise<capSQLiteResult>;
    /**
     * Store a passphrase in a secure store
     * Update the secret of previous encrypted databases with GlobalSQLite
     * !!! Only to be used once if you wish to encrypt database !!!
     *
     * @param options capSetSecretOptions
     * @return Promise<void>
     * @since 3.0.0-beta.13
     */
    setEncryptionSecret(options: capSetSecretOptions): Promise<void>;
    /**
     * Change the passphrase in a secure store
     * Update the secret of previous encrypted databases with passphrase
     * in secure store
     *
     * @param options capChangeSecretOptions
     * @return Promise<void>
     * @since 3.0.0-beta.13
     */
    changeEncryptionSecret(options: capChangeSecretOptions): Promise<void>;
    /**
     * create a database connection
     * @param options capConnectionOptions
     * @return Promise<void>
     * @since 2.9.0 refactor
     */
    createConnection(options: capConnectionOptions): Promise<void>;
    /**
     * close a database connection
     * @param options capSQLiteOptions
     * @return Promise<void>
     * @since 2.9.0 refactor
     */
    closeConnection(options: capSQLiteOptions): Promise<void>;
    /**
     * Echo a given string
     *
     * @param options: capEchoOptions
     * @return Promise<capEchoResult>
     * @since 0.0.1
     */
    echo(options: capEchoOptions): Promise<capEchoResult>;
    /**
     * Open a SQLite database
     * @param options: capSQLiteOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    open(options: capSQLiteOptions): Promise<void>;
    /**
     * Close a SQLite database
     * @param options: capSQLiteOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    close(options: capSQLiteOptions): Promise<void>;
    /**
     * Get a SQLite database version
     * @param options: capSQLiteOptions
     * @returns Promise<void>
     * @since 3.2.0
     */
    getVersion(options: capSQLiteOptions): Promise<capVersionResult>;
    /**
     * Execute a Batch of Raw Statements as String
     * @param options: capSQLiteExecuteOptions
     * @returns Promise<capSQLiteChanges>
     * @since 0.0.1
     */
    execute(options: capSQLiteExecuteOptions): Promise<capSQLiteChanges>;
    /**
     * Execute a Set of Raw Statements as Array of CapSQLiteSet
     * @param options: capSQLiteSetOptions
     * @returns Promise<capSQLiteChanges>
     * @since 2.2.0-2
     */
    executeSet(options: capSQLiteSetOptions): Promise<capSQLiteChanges>;
    /**
     * Execute a Single Statement
     * @param options: capSQLiteRunOptions
     * @returns Promise<capSQLiteChanges>
     * @since 0.0.1
     */
    run(options: capSQLiteRunOptions): Promise<capSQLiteChanges>;
    /**
     * Query a Single Statement
     * @param options: capSQLiteQueryOptions
     * @returns Promise<capSQLiteValues>
     * @since 0.0.1
     */
    query(options: capSQLiteQueryOptions): Promise<capSQLiteValues>;
    /**
     * Check if a SQLite database exists with opened connection
     * @param options: capSQLiteOptions
     * @returns Promise<capSQLiteResult>
     * @since 2.0.1-1
     */
    isDBExists(options: capSQLiteOptions): Promise<capSQLiteResult>;
    /**
     * Check if a SQLite database is opened
     * @param options: capSQLiteOptions
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isDBOpen(options: capSQLiteOptions): Promise<capSQLiteResult>;
    /**
     * Check if a SQLite database exists without connection
     * @param options: capSQLiteOptions
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isDatabase(options: capSQLiteOptions): Promise<capSQLiteResult>;
    /**
     * Check if a table exists in a SQLite database
     * @param options: capSQLiteTableOptions
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isTableExists(options: capSQLiteTableOptions): Promise<capSQLiteResult>;
    /**
     * Delete a SQLite database
     * @param options: capSQLiteOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    deleteDatabase(options: capSQLiteOptions): Promise<void>;
    /**
     * Is Json Object Valid
     * @param options: capSQLiteImportOptions
     * @returns Promise<capSQLiteResult>
     * @since 2.0.1-1
     */
    isJsonValid(options: capSQLiteImportOptions): Promise<capSQLiteResult>;
    /**
     * Import from Json Object
     * @param options: capSQLiteImportOptions
     * @returns Promise<capSQLiteChanges>
     * @since 2.0.0-3
     */
    importFromJson(options: capSQLiteImportOptions): Promise<capSQLiteChanges>;
    /**
     * Export to Json Object
     * @param options: capSQLiteExportOptions
     * @returns Promise<capSQLiteJson>
     * @since 2.0.1-1
     */
    exportToJson(options: capSQLiteExportOptions): Promise<capSQLiteJson>;
    /**
     * Create a synchronization table
     * @param options: capSQLiteOptions
     * @returns Promise<capSQLiteChanges>
     * @since 2.0.1-1
     */
    createSyncTable(options: capSQLiteOptions): Promise<capSQLiteChanges>;
    /**
     * Set the synchronization date
     * @param options: capSQLiteSyncDateOptions
     * @returns Promise<void>
     * @since 2.0.1-1
     */
    setSyncDate(options: capSQLiteSyncDateOptions): Promise<void>;
    /**
     * Get the synchronization date
     * @param options: capSQLiteOptions
     * @returns Promise<capSQLiteSyncDate>
     * @since 2.9.0
     */
    getSyncDate(options: capSQLiteOptions): Promise<capSQLiteSyncDate>;
    /**
     * Add the upgrade Statement for database version upgrading
     * @param options: capSQLiteUpgradeOptions
     * @returns Promise<void>
     * @since 2.4.2-6 iOS & Electron 2.4.2-7 Android
     */
    addUpgradeStatement(options: capSQLiteUpgradeOptions): Promise<void>;
    /**
     * Copy databases from public/assets/databases folder to application databases folder
     * @param options: capSQLiteFromAssets  since 3.2.5-2
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    copyFromAssets(options: capSQLiteFromAssetsOptions): Promise<void>;
    /**
     * Get the database list
     * @returns Promise<capSQLiteValues>
     * @since 3.0.0-beta.5
     */
    getDatabaseList(): Promise<capSQLiteValues>;
    /**
     * Get the Migratable database list
     * @param options: capSQLitePathOptions // only iOS & Android since 3.2.4-2
     * @returns Promise<capSQLiteValues>
     * @since 3.0.0-beta.5
     */
    getMigratableDbList(options: capSQLitePathOptions): Promise<capSQLiteValues>;
    /**
     * Add SQLIte Suffix to existing databases
     * @param options: capSQLitePathOptions
     * @returns Promise<void>
     * @since 3.0.0-beta.5
     */
    addSQLiteSuffix(options: capSQLitePathOptions): Promise<void>;
    /**
     * Delete Old Cordova databases
     * @param options: capSQLitePathOptions
     * @returns Promise<void>
     * @since 3.0.0-beta.5
     */
    deleteOldDatabases(options: capSQLitePathOptions): Promise<void>;
    /**
     * Check Connection Consistency JS <=> Native
     * return true : consistency, connections are opened
     * return false : no consistency, connections are closed
     * @param options: capAllConnectionsOptions
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.11
     */
    checkConnectionsConsistency(options: capAllConnectionsOptions): Promise<capSQLiteResult>;
}
export interface capSetSecretOptions {
    /**
     * The passphrase for Encrypted Databases
     */
    passphrase?: string;
}
export interface capChangeSecretOptions {
    /**
     * The new passphrase for Encrypted Databases
     */
    passphrase?: string;
    /**
     * The old passphrase for Encrypted Databases
     */
    oldpassphrase?: string;
}
export interface capEchoOptions {
    /**
     *  String to be echoed
     */
    value?: string;
}
export interface capConnectionOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * The database  version
     */
    version?: number;
    /**
     * Set to true (database encryption) / false
     */
    encrypted?: boolean;
    /**
     * Set the mode for database encryption
     * ["encryption", "secret", "newsecret"]
     */
    mode?: string;
}
export interface capAllConnectionsOptions {
    /**
     * the dbName of all connections
     * @since 3.0.0-beta.10
     */
    dbNames?: string[];
}
export interface capSQLiteOptions {
    /**
     * The database name
     */
    database?: string;
}
export interface capSQLiteExecuteOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * The batch of raw SQL statements as string
     */
    statements?: string;
    /**
     * Enable / Disable transactions
     * default Enable (true)
     * @since 3.0.0-beta.10
     */
    transaction?: boolean;
}
export interface capSQLiteSetOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * The batch of raw SQL statements as Array of capSQLLiteSet
     */
    set?: capSQLiteSet[];
    /**
     * Enable / Disable transactions
     * default Enable (true)
     * @since 3.0.0-beta.10
     */
    transaction?: boolean;
}
export interface capSQLiteRunOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * A statement
     */
    statement?: string;
    /**
     * A set of values for a statement
     */
    values?: any[];
    /**
     * Enable / Disable transactions
     * default Enable (true)
     * @since 3.0.0-beta.10
     */
    transaction?: boolean;
}
export interface capSQLiteQueryOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * A statement
     */
    statement?: string;
    /**
     * A set of values for a statement
     * Change to any[]
     * @since 3.0.0-beta.11
     */
    values?: any[];
}
export interface capSQLiteImportOptions {
    /**
     * Set the JSON object to import
     *
     */
    jsonstring?: string;
}
export interface capSQLiteExportOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * Set the mode to export JSON Object:
     * "full" or "partial"
     *
     */
    jsonexportmode?: string;
}
export interface capSQLiteFromAssetsOptions {
    /**
     * Set the overwrite mode for the copy from assets
     * "true"/"false"  default to "true"
     *
     */
    overwrite?: boolean;
}
export interface capSQLiteSyncDateOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * Set the synchronization date
     * Format yyyy-MM-dd'T'HH:mm:ss.SSSZ
     */
    syncdate?: string;
}
export interface capSQLiteSet {
    /**
     * A statement
     */
    statement?: string;
    /**
     * the data values list as an Array
     */
    values?: any[];
}
export interface capSQLiteUpgradeOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * The upgrade options for version upgrade
     * Array of length 1 to easiest the iOS plugin
     */
    upgrade?: capSQLiteVersionUpgrade[];
}
export interface capSQLitePathOptions {
    /**
     * The folder path of existing databases
     * If not given folder path is "default"
     */
    folderPath?: string;
    /**
     * The database name's list to be copied and/or deleted
     * since 3.2.4-1
     * If not given all databases in the specify folder path
     */
    dbNameList?: string[];
}
export interface capSQLiteTableOptions {
    /**
     * The database name
     */
    database?: string;
    /**
     * The table name
     */
    table?: string;
}
export interface capEchoResult {
    /**
     * String returned
     */
    value?: string;
}
export interface capVersionResult {
    /**
     * Number returned
     */
    version?: number;
}
export interface capSQLiteResult {
    /**
     * result set to true when successful else false
     */
    result?: boolean;
}
export interface capSQLiteChanges {
    /**
     * a returned Changes
     */
    changes?: Changes;
}
export interface Changes {
    /**
     * the number of changes from an execute or run command
     */
    changes?: number;
    /**
     * the lastId created from a run command
     */
    lastId?: number;
}
export interface capSQLiteValues {
    /**
     * the data values list as an Array
     */
    values?: any[];
}
export interface capSQLiteJson {
    /**
     * an export JSON object
     */
    export?: JsonSQLite;
}
export interface capSQLiteSyncDate {
    /**
     * the synchronization date
     */
    syncDate?: number;
}
export interface JsonSQLite {
    /**
     * The database name
     */
    database: string;
    /**
     *  The database version
     */
    version: number;
    /**
     * Set to true (database encryption) / false
     */
    encrypted: boolean;
    /***
     * Set the mode
     * ["full", "partial"]
     */
    mode: string;
    /***
     * Array of Table (JsonTable)
     */
    tables: JsonTable[];
    /***
     * Array of View (JsonView)
     */
    views?: JsonView[];
}
export interface JsonTable {
    /**
     * The database name
     */
    name: string;
    /***
     * Array of Schema (JsonColumn)
     */
    schema?: JsonColumn[];
    /***
     * Array of Index (JsonIndex)
     */
    indexes?: JsonIndex[];
    /***
     * Array of Trigger (JsonTrigger)
     */
    triggers?: JsonTrigger[];
    /***
     * Array of Table data
     */
    values?: any[][];
}
export interface JsonColumn {
    /**
     * The column name
     */
    column?: string;
    /**
     * The column data (type, unique, ...)
     */
    value: string;
    /**
     * The column foreign key constraints
     */
    foreignkey?: string;
    /**
     * the column constraint
     */
    constraint?: string;
}
export interface JsonTrigger {
    /**
     * The trigger name
     */
    name: string;
    /**
     * The trigger time event fired
     */
    timeevent: string;
    /**
     * The trigger condition
     */
    condition?: string;
    /**
     * The logic of the trigger
     */
    logic: string;
}
export interface JsonIndex {
    /**
     * The index name
     */
    name: string;
    /**
     * The value of the index can have the following formats:
     * email
     * email ASC
     * email, MobileNumber
     * email ASC, MobileNumber DESC
     */
    value: string;
    /**
     * the mode (Optional)
     * UNIQUE
     */
    mode?: string;
}
export interface JsonView {
    /**
     * The view name
     */
    name: string;
    /**
     * The view create statement
     */
    value: string;
}
export interface capJsonProgressListener {
    /**
     * Progress message
     */
    progress?: string;
}
export interface capSQLiteVersionUpgrade {
    fromVersion: number;
    toVersion: number;
    statement: string;
    set?: capSQLiteSet[];
}
/**
 * SQLiteConnection Interface
 */
export interface ISQLiteConnection {
    /**
     * Echo a value
     * @param value
     * @returns Promise<capEchoResult>
     * @since 2.9.0 refactor
     */
    echo(value: string): Promise<capEchoResult>;
    /**
     * Check if a secret is stored
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.13
     */
    isSecretStored(): Promise<capSQLiteResult>;
    /**
     * Set a passphrase in a secure store
     * @param passphrase
     * @returns Promise<void>
     * @since 3.0.0-beta.13
     */
    setEncryptionSecret(passphrase: string): Promise<void>;
    /**
     * Change the passphrase in a secure store
     * @param passphrase
     * @param oldpassphrase
     * @returns Promise<void>
     * @since 3.0.0-beta.13
     */
    changeEncryptionSecret(passphrase: string, oldpassphrase: string): Promise<void>;
    /**
     * Add the upgrade Statement for database version upgrading
     * @param database
     * @param fromVersion
     * @param toVersion
     * @param statement
     * @param set
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    addUpgradeStatement(database: string, fromVersion: number, toVersion: number, statement: string, set?: capSQLiteSet[]): Promise<void>;
    /**
     * Create a connection to a database
     * @param database
     * @param encrypted
     * @param mode
     * @param version
     * @returns Promise<SQLiteDBConnection>
     * @since 2.9.0 refactor
     */
    createConnection(database: string, encrypted: boolean, mode: string, version: number): Promise<SQLiteDBConnection>;
    /**
     * Check if a connection exists
     * @param database
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isConnection(database: string): Promise<capSQLiteResult>;
    /**
     * Retrieve an existing database connection
     * @param database
     * @returns Promise<SQLiteDBConnection>
     * @since 2.9.0 refactor
     */
    retrieveConnection(database: string): Promise<SQLiteDBConnection>;
    /**
     * Retrieve all database connections
     * @returns Promise<Map<string, SQLiteDBConnection>>
     * @since 2.9.0 refactor
     */
    retrieveAllConnections(): Promise<Map<string, SQLiteDBConnection>>;
    /**
     * Close a database connection
     * @param database
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    closeConnection(database: string): Promise<void>;
    /**
     * Close all database connections
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    closeAllConnections(): Promise<void>;
    /**
     * Check the consistency between Js Connections
     * and Native Connections
     * if inconsistency all connections are removed
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.10
     */
    checkConnectionsConsistency(): Promise<capSQLiteResult>;
    /**
     * Import a database From a JSON
     * @param jsonstring string
     * @returns Promise<capSQLiteChanges>
     * @since 2.9.0 refactor
     */
    importFromJson(jsonstring: string): Promise<capSQLiteChanges>;
    /**
     * Check the validity of a JSON Object
     * @param jsonstring string
     * @returns Promise<capSQLiteResult>
     * @since 2.9.0 refactor
     */
    isJsonValid(jsonstring: string): Promise<capSQLiteResult>;
    /**
     * Copy databases from public/assets/databases folder to application databases folder
     * @param overwrite  since 3.2.5-2
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    copyFromAssets(overwrite?: boolean): Promise<void>;
    /**
     * Check if a database exists
     * @param database
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isDatabase(database: string): Promise<capSQLiteResult>;
    /**
     * Get the database list
     * @returns Promise<capSQLiteValues>
     * @since 3.0.0-beta.5
     */
    getDatabaseList(): Promise<capSQLiteValues>;
}
/**
 * SQLiteConnection Class
 */
export declare class SQLiteConnection implements ISQLiteConnection {
    private sqlite;
    private _connectionDict;
    constructor(sqlite: CapacitorSQLitePlugin);
    echo(value: string): Promise<capEchoResult>;
    isSecretStored(): Promise<capSQLiteResult>;
    setEncryptionSecret(passphrase: string): Promise<void>;
    changeEncryptionSecret(passphrase: string, oldpassphrase: string): Promise<void>;
    addUpgradeStatement(database: string, fromVersion: number, toVersion: number, statement: string, set?: capSQLiteSet[]): Promise<void>;
    createConnection(database: string, encrypted: boolean, mode: string, version: number): Promise<SQLiteDBConnection>;
    closeConnection(database: string): Promise<void>;
    isConnection(database: string): Promise<capSQLiteResult>;
    retrieveConnection(database: string): Promise<SQLiteDBConnection>;
    retrieveAllConnections(): Promise<Map<string, SQLiteDBConnection>>;
    closeAllConnections(): Promise<void>;
    checkConnectionsConsistency(): Promise<capSQLiteResult>;
    importFromJson(jsonstring: string): Promise<capSQLiteChanges>;
    isJsonValid(jsonstring: string): Promise<capSQLiteResult>;
    copyFromAssets(overwrite?: boolean): Promise<void>;
    isDatabase(database: string): Promise<capSQLiteResult>;
    getDatabaseList(): Promise<capSQLiteValues>;
}
/**
 * SQLiteDBConnection Interface
 */
export interface ISQLiteDBConnection {
    /**
     * Get SQLite DB Connection DB name
     * @returns string
     * @since 2.9.0 refactor
     */
    getConnectionDBName(): string;
    /**
     * Open a SQLite DB Connection
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    open(): Promise<void>;
    /**
     * Close a SQLite DB Connection
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    close(): Promise<void>;
    /**
     * Get the a SQLite DB Version
     * @returns Promise<capVersionResult>
     * @since 3.2.0
     */
    getVersion(): Promise<capVersionResult>;
    /**
     * Execute SQLite DB Connection Statements
     * @param statements
     * @returns Promise<capSQLiteChanges>
     * @since 2.9.0 refactor
     */
    execute(statements: string, transaction?: boolean): Promise<capSQLiteChanges>;
    /**
     * Execute SQLite DB Connection Query
     * @param statement
     * @param values (optional)
     * @returns Promise<Promise<capSQLiteValues>
     * @since 2.9.0 refactor
     */
    query(statement: string, values?: any[]): Promise<capSQLiteValues>;
    /**
     * Execute SQLite DB Connection Raw Statement
     * @param statement
     * @param values (optional)
     * @returns Promise<capSQLiteChanges>
     * @since 2.9.0 refactor
     */
    run(statement: string, values?: any[], transaction?: boolean): Promise<capSQLiteChanges>;
    /**
     * Execute SQLite DB Connection Set
     * @param set
     * @returns Promise<capSQLiteChanges>
     * @since 2.9.0 refactor
     */
    executeSet(set: capSQLiteSet[], transaction?: boolean): Promise<capSQLiteChanges>;
    /**
     * Check if a SQLite DB Connection exists
     * @returns Promise<capSQLiteResult>
     * @since 2.9.0 refactor
     */
    isExists(): Promise<capSQLiteResult>;
    /**
     * Check if a SQLite database is opened
     * @param options: capSQLiteOptions
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isDBOpen(options: capSQLiteOptions): Promise<capSQLiteResult>;
    /**
     * Check if a table exists
     * @returns Promise<capSQLiteResult>
     * @since 3.0.0-beta.5
     */
    isTable(table: string): Promise<capSQLiteResult>;
    /**
     * Delete a SQLite DB Connection
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    delete(): Promise<void>;
    /**
     * Create a synchronization table
     * @returns Promise<capSQLiteChanges>
     * @since 2.9.0 refactor
     */
    createSyncTable(): Promise<capSQLiteChanges>;
    /**
     * Set the synchronization date
     * @param syncdate
     * @returns Promise<void>
     * @since 2.9.0 refactor
     */
    setSyncDate(syncdate: string): Promise<void>;
    /**
     * Get the synchronization date
     * @returns Promise<capSQLiteSyncDate>
     * @since 2.9.0 refactor
     */
    getSyncDate(): Promise<string>;
    /**
     * Export the given database to a JSON Object
     * @param mode
     * @returns Promise<capSQLiteJson>
     * @since 2.9.0 refactor
     */
    exportToJson(mode: string): Promise<capSQLiteJson>;
}
/**
 * SQLiteDBConnection Class
 */
export declare class SQLiteDBConnection implements ISQLiteDBConnection {
    private dbName;
    private sqlite;
    constructor(dbName: string, sqlite: any);
    getConnectionDBName(): string;
    open(): Promise<void>;
    close(): Promise<void>;
    getVersion(): Promise<capVersionResult>;
    execute(statements: string, transaction?: boolean): Promise<capSQLiteChanges>;
    query(statement: string, values?: any[]): Promise<capSQLiteValues>;
    run(statement: string, values?: any[], transaction?: boolean): Promise<capSQLiteChanges>;
    executeSet(set: capSQLiteSet[], transaction?: boolean): Promise<capSQLiteChanges>;
    isExists(): Promise<capSQLiteResult>;
    isTable(table: string): Promise<capSQLiteResult>;
    isDBOpen(): Promise<capSQLiteResult>;
    delete(): Promise<void>;
    createSyncTable(): Promise<capSQLiteChanges>;
    setSyncDate(syncdate: string): Promise<void>;
    getSyncDate(): Promise<string>;
    exportToJson(mode: string): Promise<capSQLiteJson>;
}
