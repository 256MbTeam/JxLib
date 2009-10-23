 // $Id: $
/**
 * Class: Jx.Formatter
 * 
 * Extends: <Jx.Object>
 * 
 * Base class used for specific implementations to coerce data into specific formats
 * 
 * Example:
 * (code)
 * (end)
 *
 * License: 
 * Copyright (c) 2009, Jon Bomgardner.
 * 
 * This file is licensed under an MIT style license
 */
Jx.Formatter = new Class({
    
    Extends: Jx.Object,
    
    /**
     * APIMethod: format
     * Empty method that must be overridden by subclasses to provide
     * the needed formatting functionality.
     */
    format: $empty
});